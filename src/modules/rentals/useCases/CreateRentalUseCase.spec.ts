/* eslint-disable prettier/prettier */
import dayjs from 'dayjs';

import { CarsRepositoryInMemory } from '@modules/cars/repositories/im-memory/CarsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { RentalsRepositoryInMemory } from '../repositories/in-memory/RentalsRepositoryInMemory';
import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Rental', () => {
    const dayAdd24Hours = dayjs().add(1, 'day').toDate();
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        dayjsDateProvider = new DayjsDateProvider();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayjsDateProvider,
            carsRepositoryInMemory
        );
    });

    it('Should be able to create a new rental', async () => {
        const rental = await createRentalUseCase.execute({
            user_id: '12345',
            car_id: '121212',
            expected_return_date: dayAdd24Hours,
        });
        expect(rental).toHaveProperty('id');
        expect(rental).toHaveProperty('start_date');
    });

    it('Should not be able to create a new rental if there is another open to the same user', async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: '12345',
                car_id: '121212',
                expected_return_date: dayAdd24Hours,
            });

            const rental = await createRentalUseCase.execute({
                user_id: '12345',
                car_id: '121213',
                expected_return_date: dayAdd24Hours,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to create a new rental if there is another open to the same car', async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: '123',
                car_id: 'test',
                expected_return_date: dayAdd24Hours,
            });

            const rental = await createRentalUseCase.execute({
                user_id: '321',
                car_id: 'test',
                expected_return_date: dayAdd24Hours,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to create a new rental with invalid return time', async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: '123',
                car_id: 'test',
                expected_return_date: dayjs().toDate(),
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should should be possible to change the status of a recently rented car', async () => {
        const rental = await createRentalUseCase.execute({
            user_id: '123',
            car_id: 'test',
            expected_return_date: dayjs().toDate(),
        });
        const car = await carsRepositoryInMemory.findById(rental.car_id);
        expect(car.available).toBe(false);
    });
});

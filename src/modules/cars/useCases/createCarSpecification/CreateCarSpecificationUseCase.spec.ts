import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/im-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/im-memory/SpecificationRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificatonUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificatonUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create car specification', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificatonUseCase(
            carsRepositoryInMemory,
            specificationRepositoryInMemory
        );
    });

    it('Should not be able to add a new specification to a non-existent car', async () => {
        await expect(async () => {
            const car_id = '1234';
            const specification_id = ['54321'];
            await createCarSpecificationUseCase.execute({
                car_id,
                specification_id,
            });
        }).rejects.toEqual(new AppError('Car does not exists!'));
    });

    it('Should be able to add a new specification to the car', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Car Name',
            description: 'Description Car',
            daily_rate: 100,
            license_plate: 'ASC-1200',
            fine_amount: 50,
            brand: 'Brand Test',
            category_id: 'algumHashDoido',
        });

        const specification = await specificationRepositoryInMemory.create({
            description: 'test',
            name: 'teste',
        });

        const specification_id = [specification.id];
        const specificationCars = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specification_id,
        });
        expect(specificationCars).toHaveProperty('specifications');
        expect(specificationCars.specifications.length).toBe(1);
    });
});

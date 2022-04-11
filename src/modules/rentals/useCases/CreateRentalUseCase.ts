interface IRequest {
    user_id: string;
    car_id: string;
    expected_return: Date;
}


class CreateRentalUseCase{
    async execute(): Promise<void>;
}
export {CreateRentalUseCase}
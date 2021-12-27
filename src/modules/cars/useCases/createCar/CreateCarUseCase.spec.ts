import { CarsRepositoryInMemory } from "@modules/cars/repositories/im-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "@modules/cars/useCases/createCar/CreateCarUseCase";
import { AppError } from "@shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "name car",
      description: "description car",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
  });

  it("Show not be able to create a new car", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car 1",
        description: "description car",
        daily_rate: 100,
        license_plate: "abc-1234",
        fine_amount: 60,
        brand: "brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car 2",
        description: "description car",
        daily_rate: 100,
        license_plate: "abc-1234",
        fine_amount: 60,
        brand: "brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Show be able to create a car with available true by default", async () => {
    expect(async () => {
      const car = await createCarUseCase.execute({
        name: "Car 1",
        description: "description car",
        daily_rate: 100,
        license_plate: "abc-1234",
        fine_amount: 60,
        brand: "brand",
        category_id: "category",
      });
      expect(car.available).toBe(true);
    });
  });
});

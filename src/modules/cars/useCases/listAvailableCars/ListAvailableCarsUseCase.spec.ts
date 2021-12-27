import { CarsRepositoryInMemory } from "@modules/cars/repositories/im-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Available",
      description: "description car",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("Should be to list all cars available by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "description car",
      daily_rate: 100,
      license_plate: "cab-1234",
      fine_amount: 60,
      brand: "brand_test",
      category_id: "category",
    });
    const cars = await listAvailableCarsUseCase.execute({ name: "Car2" });
    expect(cars).toEqual([car]);
  });

  it("Should be to list all cars available by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "description car",
      daily_rate: 100,
      license_plate: "cab-1234",
      fine_amount: 60,
      brand: "brand_test",
      category_id: "category",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "brand_test",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be to list all cars available by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "description car",
      daily_rate: 100,
      license_plate: "cab-1234",
      fine_amount: 60,
      brand: "brand_test",
      category_id: "category",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category",
    });
    expect(cars).toEqual([car]);
  });
});

import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });
    if (brand) {
      carQuery.andWhere("brand =  :brand", { brand });
    }
    if (category_id) {
      carQuery.andWhere("category_id =  :category_id", { category_id });
    }
    if (name) {
      carQuery.andWhere("name =  :name", { name });
    }
    const cars = await carQuery.getMany();

    return cars;
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    await this.repository.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate,
    });
    return car;
  }
}

export { CarsRepository };

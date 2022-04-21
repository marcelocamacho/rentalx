import { getRepository, Repository } from "typeorm";

import { ICreateRentalDTO } from "@modules/rentals/dto/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({ car_id });
    return openByCar;
  };

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openById = await this.repository.findOne({ user_id });
    return openById;
  };

  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create(data);
    await this.repository.save(rental);
    return rental;
  };
}

export { RentalsRepository };

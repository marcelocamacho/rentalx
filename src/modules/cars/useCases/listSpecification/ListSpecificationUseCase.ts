import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const specification = this.specificationRepository.list();
    return specification;
  }
}

export { ListSpecificationUseCase };

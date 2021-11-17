import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/im-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Description test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );
<<<<<<< HEAD
    console.log(categoryCreated);
=======

>>>>>>> Testes automatizados para useCase de Usuários
    expect(categoryCreated).toHaveProperty("id");
  });

  it("Should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category test",
        description: "Description test",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
<<<<<<< HEAD
=======

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
>>>>>>> Testes automatizados para useCase de Usuários
    }).rejects.toBeInstanceOf(AppError);
  });
});

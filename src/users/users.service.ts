import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Jakarta',
    },
    // {
    //   id: 2,
    //   name: 'Doe John',
    //   city: 'Yogyakarta',
    // },
  ];

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id == id);
  }
}

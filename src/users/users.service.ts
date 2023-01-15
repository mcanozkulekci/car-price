import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { stringify } from 'querystring';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    // Creating an instance of an entity, does not update the db
    const user = this.repo.create({ email, password });
    // To update the db
    return this.repo.save(user);
  }
}

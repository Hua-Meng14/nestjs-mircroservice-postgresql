import { Injectable } from '@nestjs/common';
import { ItemEntity } from './items/item.entity';
import { ItemRepository } from './items/item.repository';


@Injectable()
export class AppService {
  constructor(private readonly itemRepository: ItemRepository) { }

  getHello(): string {
    return 'Hello World!';
  }

  createItem(itemDto: { name: any; }) {
    const item = new ItemEntity();
    itemDto.name = itemDto.name;
    return this.itemRepository.save(item)
  }

  getItemById(id) {
    return this.itemRepository.findOne(id);
  }



}

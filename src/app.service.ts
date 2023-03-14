import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemEntity } from './items/item.entity';
import { ItemRepository } from './items/item.repository';


class CreateItemDto {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  constructor(private readonly itemRepository: ItemRepository) { }

  getHello(): string {
    return 'Hello World!';
  }

  createItem(createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.itemRepository.createItem(createItemDto);
    // const item = new ItemEntity();
    // item.name = itemDto.name;
    // return this.itemRepository.save(item)

  }


  async getItemById(id) {
    const item = await this.itemRepository.findOne({ where: { id } });
    // console.log(item) 
    if (!item) {
      throw new NotFoundException('Item not found with id,', id);
    }
    return item

  }
}

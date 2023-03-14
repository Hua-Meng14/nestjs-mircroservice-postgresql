import { Injectable } from '@nestjs/common'
import { EntityRepository,DataSource, Repository } from 'typeorm'
import { ItemEntity } from './item.entity'


class CreateItemDto {
    id: number;
    name: string;
}

// @EntityRepository(ItemEntity)
@Injectable()
export class ItemRepository extends Repository<ItemEntity> {
    constructor(private dataSource: DataSource) {
        super (ItemEntity, dataSource.createEntityManager());
    }

    async createItem({id, name}: CreateItemDto): Promise<ItemEntity>{
        const item = this.create({id, name})
        await this.save(item)
        return item;
    }
 }
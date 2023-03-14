import {Column, BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class ItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemName: string;
}


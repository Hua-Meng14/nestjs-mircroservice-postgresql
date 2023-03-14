import {Column, BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class ItemEntity extends BaseEntity {
    // @PrimaryGeneratedColumn()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}


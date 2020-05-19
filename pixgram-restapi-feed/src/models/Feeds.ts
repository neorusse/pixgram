import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Feeds extends Model<Feeds> {
    @Column
    caption!: string;

    @Column
    url!: string;

    @Column
    @CreatedAt
    createdAt!: Date;

    @Column
    @UpdatedAt
    updatedAt!: Date;
}

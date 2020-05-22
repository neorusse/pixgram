import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
@Table
export class Users extends Model<Users> {
    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @PrimaryKey
    @Column
    email!: string;

    @Column
    password!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    short(): object {
        return {
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
        };
    }
}

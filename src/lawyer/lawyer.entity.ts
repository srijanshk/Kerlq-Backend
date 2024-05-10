import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Matter } from '../matter/matter.entity';

@Entity()
export class Lawyer {
  @PrimaryGeneratedColumn()
  lawyer_id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Matter, matter => matter.lawyer)
  matters: Matter[];
}
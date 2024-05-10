import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Client } from '../client/client.entity';
import { Lawyer } from '../lawyer/lawyer.entity';

@Entity()
export class Matter {
  @PrimaryGeneratedColumn()
  matter_id: number;

  @Column({
    type: 'uuid',
    unique: true
  })
  matter_number: string;

  @Column() 
  client_id: number;

  @ManyToOne(() => Client, client => client.matters)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @Column()
  lawyer_id: number;

  @ManyToOne(() => Lawyer, lawyer => lawyer.matters)
  @JoinColumn({ name: 'lawyer_id' })
  lawyer: Lawyer;

  @Column()
  matter_type: string;

  @Column()
  status: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date | null;

  @BeforeInsert()
  generateUUID() {
    this.matter_number = uuidv4();
  }
}
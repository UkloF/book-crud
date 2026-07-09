import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,} from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column({ unique: true })
  isbn!: string;

  @Column({ name: 'published_date', type: 'date', nullable: true })
  publishedDate!: Date;

  @Column({ name: 'total_copies', default: 0 })
  totalCopies!: number;

  @Column({ name: 'available_copies', default: 0 })
  availableCopies!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdat!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedat!: Date;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = await this.booksRepository.create(createBookDto);
    const createBook = await this.booksRepository.insert(book);
    return createBook;
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(id: number) {
    return this.booksRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.booksRepository.findOneBy({ id });
    if(!book){
      throw new NotFoundException('Book not found');
    }
    
    Object.assign(book, updateBookDto);
    return await this.booksRepository.save(book);
  }

  async remove(id: number) {
    const deleteBook = await this.booksRepository.delete(id);

    return deleteBook;
  }
}

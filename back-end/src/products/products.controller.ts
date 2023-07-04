import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UploadedFile,
  Bind
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import Parser from '../lib/srt-parser'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const id = await this.productsService.insert(title, description, price);
    return { id };
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productsService.getAll();
    return products;
  }

  @Get(':id')
  findProduct(@Param('id') id: string) {
    return this.productsService.find(id);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    await this.productsService.update(id, title, description, price);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    await this.productsService.delete(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Bind(UploadedFile())
  async uploadFile(file) {
    let parser = new Parser();
    let srt = file.buffer.toString();
    console.log(file);
    let srt_array = parser.fromSrt(srt);
    for (let item of srt_array) {
      console.log(item)
    }
    return srt_array;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Team } from './team.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeamService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

  async insert(title: string, msg: string, owner: string) {
    const team = new this.teamModel({ title, msg, owner });
    const result = await team.save();
    return result;
  }

  async getAll(): Promise<Team[]> {
    const products: Team[] = await this.teamModel
      .find()
      .populate('owner')
      .exec();
    return products.map((team: Team) => ({
      title: team.title,
      msg: team.msg,
      owner: team.owner,
    })) as Team[];
  }

  //   async find(id: string) {
  //     const product = await this.getProduct(id);
  //     return {
  //       id: product.id,
  //       title: product.title,
  //       name: product.description,
  //       price: product.price,
  //     };
  //   }

  //   async update(id: string, title: string, description: string, price: number) {
  //     const product = await this.getProduct(id);

  //     if (title) {
  //       product.title = title;
  //     }
  //     if (description) {
  //       product.description = description;
  //     }
  //     if (price) {
  //       product.price = price;
  //     }

  //     product.save();
  //   }

  //   async delete(id: string): Promise<void> {
  //     const result = await this.teamModel.deleteOne({ _id: id }).exec();
  //     if (result.deletedCount === 0) {
  //       throw new NotFoundException(`Could not find product ${id}`);
  //     }
  //   }

  //   async getProduct(id: string): Promise<Team> {
  //     let team;
  //     try {
  //       team = await this.teamModel.findById(id).exec();
  //     } catch (error) {
  //       throw new NotFoundException(`Could not find product ${id}`);
  //     }

  //     if (!team) {
  //       throw new NotFoundException(`Could not find product ${id}`);
  //     }
  //     return team as Team;
  //   }
}

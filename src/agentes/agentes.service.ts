import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Agente } from "./entities/agente.entity";
import { Repository } from "typeorm";

@Injectable()
export class AgentesService {

  constructor(@InjectRepository(Agente) private agenteRepository: Repository<Agente>) {

  }

  create(createAgenteDto: CreateAgenteDto) {
    return this.agenteRepository.save(createAgenteDto);
  }

  findAll() {
    return this.agenteRepository.find();
  }

  findOne(id: number) {
    return this.agenteRepository.findOneBy({id});
  }

  update(id: number, updateAgenteDto: UpdateAgenteDto) {
    return this.agenteRepository.update({id},updateAgenteDto);
  }

  remove(id: number) {
    return this.agenteRepository.delete({id});
  }
}

/* eslint-disable prettier/prettier */
import { Student } from './student.schema';
import { StudentService } from './student.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data);
    }

    @Get()
    async getStudents(){
        return this.studentService.getAllStudents();
    }
    @Get(":id")
    async getStudent(@Param("id") id: string){
        return this.studentService.getStudentById(id)
    }
}

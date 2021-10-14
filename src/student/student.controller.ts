/* eslint-disable prettier/prettier */
;
import { Controller, Put, Get, Post, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

// Inserting a variable into the Controller() makes all routes start with /variable(i.e /students)
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Get Decorator will get data from a server.
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  // Additional paths are added to the request decorator.
  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe, studentId: string
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
    @Body('name') @Body(name: string)
  : FindStudentResponseDto {
    return this.studentService.createStudent(body);
  }

  // Additional paths are added to the request decorator.
  @Put('/:studentId')
    @Param('studentId') @Body(body: UpdateStudentDto
  ): {
  }
}

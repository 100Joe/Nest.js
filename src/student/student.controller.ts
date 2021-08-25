import { Controller, Put, Get, Post } from '@nestjs/common';

// Inserting a variable into the Controller() makes all routes start with /variable(i.e /students)
@Controller('students')
export class StudentController {
  // Get Decorator will get data from a server.
  @Get()
  getStudents() {
    return 'All students';
  }

  // Additional paths are added to the request decorator.
  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }

  // Additional paths are added to the request decorator.
  @Put('/:studentId')
  updateStudent() {
    return 'update students by Id';
  }
}

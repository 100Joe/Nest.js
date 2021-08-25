import {
  Controller,
  Put,
  Get,
  Post,
  Param,
  ConsoleLogger,
  Body,
} from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

// Inserting a variable into the Controller() makes all routes start with /variable(i.e /students)
@Controller('students')
export class StudentController {
  // Get Decorator will get data from a server.
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All students';
  }

  // Additional paths are added to the request decorator.
  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get Student With Id of ${studentId}`;
  }

  @Post()
  createStudent(
    @Body() body: CreateStudentDto,
    @Body('name') name: string,
  ): FindStudentResponseDto {
    return `Create Student with the Following Dat ${JSON.stringify(body)}`;
  }

  // Additional paths are added to the request decorator.
  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update students with Id of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}

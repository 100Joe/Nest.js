import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherContoller {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `Get All students that belong to teacher with Id of ${teacherId}`;
  }

  // This decorator updates the server information.
  @Put('/:studentId')
  updateStudentTeacher(
    // Param allows us to access the Parameters inside the body of a method.
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update student with Id of ${studentId} to Teacher with an Id of ${teacherId}`;
  }
}

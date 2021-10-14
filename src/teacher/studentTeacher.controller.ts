/* eslint-disable prettier/prettier */

import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherContoller {
  // Constructor gives you access to services needs to be implememted with {}
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  // This decorator updates the server information.
  @Put('/:studentId')
  updateStudentTeacher(
    // Param allows us to access the Parameters inside the body of a method.
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}

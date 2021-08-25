import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherContoller {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get All students that belong to teacher with Id of ${teacherId}`;
  }

  // This decorator updates the server information.
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update student with Id of ${studentId} to Teacher with an Id of ${teacherId}`;
  }
}

import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class StudentTeacherContoller {
  @Get('/:teacherId/students')
  getStudents() {
    return 'all students associated with a teacher';
  }

  // This decorator updates the server information.
  @Put('/:studentId')
  updateStudentTeacher() {
    return ' update student Teacher';
  }
}

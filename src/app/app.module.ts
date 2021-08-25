import { Module } from '@nestjs/common';
import { StudentTeacherContoller } from 'src/teacher/studentTeacher.controller';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherContoller],
})
export class AppModule {}

// Root of the application similar to React's App.js.

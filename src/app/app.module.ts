import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherContoller } from 'src/teacher/studentTeacher.controller';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherContoller],
  providers: [StudentService, TeacherService],
})
export class AppModule {}

// Root of the application similar to React's App.js.

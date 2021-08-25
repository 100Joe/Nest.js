export class FindTeacherResponseDto {
  id: string;
  name: string;
}

export class UpdateStudentTeacherDto {
  id: string;
  name: string;
  teacher: string;
}

export class AllStudentsPerTeacherDto {
  id: string;
  name: string;
  teacher: string;
}

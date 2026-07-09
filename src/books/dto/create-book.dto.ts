export class CreateBookDto {
    title!: string;
    author!: string;
    isbn!: string;
    publishedDate!: string; // รับเป็นข้อความสติงในฟอร์แมต "YYYY-MM-DD" จาก Postman ก่อน
    totalCopies!: number;
    availableCopies!: number;
}

export interface Book {
  id: number;
  isbn: string;
  name: string;
  category: string;
  volumes: string[];
  tags: string[];
}

export const books: Book[] = [
  {
    id: 1,
    isbn: "978-1-56619-909-4",
    name: "To Kill a Mockingbird",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Classic", "Literature"],
  },
  {
    id: 2,
    isbn: "978-0-452-28423-4",
    name: "1984",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Dystopian", "Science Fiction"],
  },
  {
    id: 3,
    isbn: "978-1-4088-5560-4",
    name: "Harry Potter and the Philosopher's Stone",
    category: "Fantasy",
    volumes: ["1"],
    tags: ["Magic", "Adventure"],
  },
  {
    id: 4,
    isbn: "978-0-345-81602-9",
    name: "The Catcher in the Rye",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Coming of Age", "Literature"],
  },
  {
    id: 5,
    isbn: "978-0-06-112008-4",
    name: "The Great Gatsby",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Romance", "Literature"],
  },
  {
    id: 6,
    isbn: "978-0-14-243720-9",
    name: "Pride and Prejudice",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Romance", "Classic"],
  },
  {
    id: 7,
    isbn: "978-1-59397-802-8",
    name: "The Hobbit",
    category: "Fantasy",
    volumes: ["1"],
    tags: ["Adventure", "Middle-earth"],
  },
  {
    id: 8,
    isbn: "978-0-316-76948-3",
    name: "The Lord of the Rings",
    category: "Fantasy",
    volumes: ["1", "2", "3"],
    tags: ["Adventure", "Middle-earth"],
  },
  {
    id: 9,
    isbn: "978-0-689-85896-5",
    name: "To Kill a Mockingbird",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Classic", "Literature"],
  },
  {
    id: 10,
    isbn: "978-1-101-15692-1",
    name: "Fahrenheit 451",
    category: "Fiction",
    volumes: ["1"],
    tags: ["Dystopian", "Science Fiction"],
  },
];

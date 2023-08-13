export interface Pet {
    id: number;
    name: string;
    animalType: "dog" | "cat";
    age: number;
    description: string;
    adopted: boolean;
    image: string;
    breed: string,
    isBoy: boolean,
    isAdopted:boolean
  };
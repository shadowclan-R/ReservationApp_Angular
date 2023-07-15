export interface Instrument {
    id: number;
    name: string;
    active: boolean;
    description:string;
    facilityId: number;
    facilityName: string;
}

export const instruments:Instrument[] = [
    {
      id: 1,
      name: 'Item 1',
      active: true,
      description: "Good Item",
      facilityId: 1,
      facilityName: ''
    },
    {
      id: 2,
      name: 'Item 2',
      active: true,
      description: "",
      facilityId: 1,
      facilityName: ''
    },
    {
      id: 3,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 2,
      facilityName: ''
    }
  ];
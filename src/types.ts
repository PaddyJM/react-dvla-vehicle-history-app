export interface RFRAndComments {
  text: string;
  type: string;
  dangerous?: boolean;
}

export interface MOTTest {
  completedDate: string;
  testResult: string;
  expiryDate?: string;
  odometerValue: string;
  odometerUnit: string;
  motTestNumber: string;
  rfrAndComments: RFRAndComments[];
}

export interface MOTHistory {
  registration: string;
  make: string;
  model: string;
  firstUsedDate: string;
  fuelType: string;
  primaryColour: string;
  motTests: Array<MOTTest>;
}

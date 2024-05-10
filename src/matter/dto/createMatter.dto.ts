import { IsInt, IsNotEmpty, IsUUID, IsString, IsEnum } from 'class-validator';

enum MatterStatus {
  Active = 'Active',
  Closed = 'Closed',
  OnHold = 'On Hold'
}

enum MatterType {
  Litigation = 'Litigation',
  Corporate = 'Corporate',
  IP = 'Intellectual Property',
  RealEstate = 'Real Estate',
  Others= 'Others'
}

export class CreateMatterDto {
  @IsNotEmpty()
  @IsInt()
  client_id: number;

  @IsNotEmpty()
  @IsInt()
  lawyer_id: number;

  @IsEnum(MatterType)
  matter_type: MatterType;

  @IsEnum(MatterStatus)
  status: MatterStatus;

  @IsNotEmpty()
  @IsString()
  description: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Note')
export class Note {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'uuid',
    unique: true,
    length: 36,
    default: () => "'uuid()'",
  })
  uuid: string;

  @Column('int', { name: 'userId', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'title', length: 200 })
  title: string;

  @Column('text', { name: 'text', nullable: true })
  text: string | null;

  @Column('timestamp', {
    name: 'createAt',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createAt: Date;

  @Column('timestamp', {
    name: 'updateAt',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updateAt: Date;
}

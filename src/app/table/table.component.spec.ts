import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PblNgridModule} from "@pebula/ngrid";
import {PblNgridHarness} from "@pebula/ngrid/testing";
import { TableComponent } from './table.component';
import {PblNgridMaterialModule} from "@pebula/ngrid-material";

describe('TableComponent', () => {
  let fixture: ComponentFixture<TableComponent>;
  let loader: HarnessLoader;
  let ngridHarness: PblNgridHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PblNgridModule.forRoot({}, []),
        PblNgridMaterialModule
      ],
      declarations: [ TableComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    ngridHarness = await loader.getHarness(PblNgridHarness);
  });

  it('should have the provided columns', async () => {
    const columnIds = await ngridHarness.getColumnIds();
    expect(columnIds).toEqual(['id', 'name', 'company', 'department']);
  });

  it('should show the data provided', async () => {
    const data = await ngridHarness.getViewPortData();
    console.log(data)
    expect(data).toEqual([
      ['1', 'John Doe', 'Google', 'Sales']
    ]);
  })
});

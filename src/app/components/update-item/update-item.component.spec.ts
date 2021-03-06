import { SwotService } from './../../services/swot/swot.service';
import { SwotItem } from './../../models/swot-model/swot-item';
import { environment } from './../../../environments/environment';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { UpdateItemComponent } from './update-item.component';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('UpdateItemComponent', () => {

class MockService {
  
}

// class MockItem {
//   id: number;
//   name: string;
//   type: string;
//   note: string;
//   swotAnalysisId: number;
// }
let swotItem = [
  {
    id: 1,
    name: "Test",
    type: "STRENGTH",
    note: "Test",
    swotAnalysisId: 1
}]


  let component: UpdateItemComponent;
  let fixture: ComponentFixture<UpdateItemComponent>;
  // let swotServ: SwotService;
  let modalServ: NgbModal;
  // let swotItem: SwotItem;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy}


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        FormsModule
        
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule, SwotService,
                    // {provide: SwotItem, useClass: MockItem},
        {
          useClass: class {swotItem = jasmine.createSpy("swotItem")},
          // useClass: class {swotItem = jasmine.createSpy("swotItem").and.returnValue(of(mockItem))},
        }],
        
      declarations: [ UpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // swotItem = TestBed.inject(SwotItem);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

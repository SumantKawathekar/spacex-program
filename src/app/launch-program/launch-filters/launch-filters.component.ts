import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LaunchProgramService } from '../launch-program.service';

@Component({
  selector: 'app-launch-filters',
  templateUrl: './launch-filters.component.html',
  styleUrls: ['./launch-filters.component.scss']
})
export class LaunchFiltersComponent implements OnInit {
  public filteredValues: any
  public years = [
    '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'
  ]
  public launchSuccessArr = [true, false]
  public landSuccessArr = [true, false]
  public filteredResult: any;
  public launchForm: FormGroup;
  public selectedIndex: number;
  public selectedLaunchIndex:number;
  public selectedLandIndex:number;
  private selectedYear: number;
  private launchStatus: any
  public yearVal: any
  constructor(private readonly launchService: LaunchProgramService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.initiateForm()
    this.launchService.getAllLaunchData()
    .subscribe(res => {
      this.filteredValues = res;
    })

  }
  private initiateForm() {
    this.launchForm = this.fb.group({
      year: new FormControl(),
      launchSuceess: new FormControl(),
      landSuceess: new FormControl()
    })
  }

  filterOnAllParams() {
    const launchYearSelected = this.launchForm.controls.year.value;
    const launchSuceessStatus = this.launchForm.controls.launchSuceess.value;
    const landSuccessStatus = this.launchForm.controls.landSuceess.value;
    const array = {
      limit: 100,
      launch_year: launchYearSelected,
      launch_success: launchSuceessStatus,
      land_success: landSuccessStatus
    }
    this.launchService.getFilteredData(array).subscribe(res => {
      this.filteredResult = res
    })
  }
   
}

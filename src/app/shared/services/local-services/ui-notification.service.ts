import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class UiNotificationService {

  private errorModalSubject = new Subject<string>();
  private successModalSubject = new Subject<string>();
  private infoModalSubject = new Subject<string>();


  errorModalObservable = this.errorModalSubject.asObservable();
  successModalObservable = this.successModalSubject.asObservable();
  infoModalObservable = this.infoModalSubject.asObservable();

  constructor() { }


  errorModal(error_json): void {
    // if error_json not an object, don't process it
    if (typeof error_json != 'object' || typeof error_json == null) {
      return;
    }

    // translate fields using an external file w/ dictionary

    // generate html
    let html_error = this.genHtmlErrorMsg(error_json);

    // send to subscribed components(appcomponent)
    this.errorModalSubject.next(html_error);
  }

  errorModalText(error_text) {
    let html_error = '<p>' + error_text + '</p>';
    this.errorModalSubject.next(html_error);
  }

  successModalText(success_text) {
    let html_success = '<p>' + success_text + '</p>';
    this.successModalSubject.next(success_text);
  }

  infoModalText(info_text) {
    let html_info = '<p>' + info_text + '</p>';
    this.infoModalSubject.next(info_text);
  }

  private genHtmlErrorMsg(obj, category = ''): string {
    let html_error = '';
    let objToProcess = {};

    if (category) {
      // add header to html w/ category
      html_error += '<h4>' + category + '</h4>';
    }

    for (let key in obj) {
      if (typeof obj[key] == 'string') {
        html_error += '<b>' + key + '</b>: '+ obj[key] + '<br>';
        continue;
      }

      if (Array.isArray(obj[key])) {
        let n_category = 1;
        for (let item of obj[key]) {
          // check if array of object to process recursively
          if (typeof item == 'object') {
            objToProcess[key + ' ' + n_category] = item;
            n_category++;
          } else {
            html_error += '<b>' + key + '</b>: ' + item + '<br>';
          }
        }
        continue;
      }

      if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
        objToProcess[key] = obj[key];
        continue;
      }
    }

    // recursively process inside objects
    for (let category in objToProcess) {
      html_error += this.genHtmlErrorMsg(objToProcess[category], category)
    }

    return html_error;
  }

}

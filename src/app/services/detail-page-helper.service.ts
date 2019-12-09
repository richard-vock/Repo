import { Injectable } from '@angular/core';
import { IEntity, ICompilation } from '../interfaces';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class DetailPageHelperService {
  constructor(private snackbar: SnackbarService) {}

  public getNumQualities = (element: IEntity) =>
    new Set(Object.values(element.processed)).size;

  public getQualitiesAndSizes = (element: IEntity) => {
    const low = element.files.find(
      _f => _f.file_link === element.processed.low,
    );
    const high = element.files.find(
      _f => _f.file_link === element.processed.high,
    );
    if (!low || !high) return '';
    return low.file_size === high.file_size
      ? `Approx. ~${Math.round(low.file_size / 1024 / 1024)}MB`
      : `Between ${Math.round(low.file_size / 1024 / 1024)} and ${Math.round(
          high.file_size / 1024 / 1024,
        )}MB`;
  };

  public getCreationDate(element: IEntity | ICompilation) {
    return new Date(
      parseInt(element._id.slice(0, 8), 16) * 1000,
    ).toLocaleString();
  }

  public copyID(_id: string) {
    try {
      if ((navigator as any).clipboard) {
        (navigator as any).clipboard.writeText(_id);
      } else if ((window as any).clipboardData) {
        (window as any).clipboardData.setData('text', _id);
      }
      this.snackbar.showMessage('Collection ID copied to clipboard', 3);
    } catch (e) {
      console.error(e);
      this.snackbar.showMessage('Could not access your clipboard', 3);
    }
  }
}

function minDate(dates) {
  //write you code here
	let ans = dates[0];
	for(let i = 1; i < dates.length; i++){
		let year = parseInt(dates[i][0] + dates[i][1] + dates[i][2] + dates[i][3]);
		let month = parseInt(dates[i][5] + dates[i][6]);
		let day = parseInt(dates[i][8] + dates[i][9]);

		let ansYear = parseInt(ans[0] + ans[1] + ans[2] + ans[3]);
let ansMonth = parseInt(ans[5] + ans[6]);
let ansDay = parseInt(ans[8] + ans[9]);


		if(year < ansYear){
			ans = dates[i];
		}
		else if(year == ansYear && month < ansMonth){
			ans = dates[i];
		}
		else if(year == ansYear && month == ansMonth && day < ansDay){
			ans = dates[i];
		}
	}

	return ans;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));

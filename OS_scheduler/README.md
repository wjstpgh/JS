# OS에서 사용되는 스케줄러를 구현해본다.

### Public data

공통자료에는 여러 가지의 구조체를 구현하였다.

```
struct process_info {/*프로세스 정보 구조체*/
	int arrival_T;
	int service_T;
	int index;

	process_info() {
		arrival_T = 0;
		service_T = 0;
		index = 0;
	}
};
```
먼저 프로세스 정보를 가지는 구조체이다. Scheduling을 구현한 함수들에 들어갈 프로세스, 프로세스의 Arrival_time, Service_time에 대한 정보를 포함한 구조체와 프로그램이 수행하는 전체시간(Total_time)을 정의하였다. 

```
truct Queue {/*각 큐에 담길 정보*/
	int front;
	int end;
	int index;

	Queue() {
		front = 0;
		end = 0;
		index = 0;
	}
};
```
다음은 Queue에 대한 구조체이다. 프로세스 정보를 가지는 구조체와 마찬가지로 Queue의 기본구조인 front와 end 그리고 index를 선언하고 생성자를 포함하였다.

```
struct Q_LV {/*큐 레벨에 따른 계층적 큐 정의*/
	struct Queue *Q;
	int q_size;/*현재 들어와있는 큐의 개수*/
	int count;/*실행되어 나간 큐를 세어줌*/
	int time_q;/*타임퀀텀에 대한 인자*/

			   //struct Q_LV::Queue();
	/*Q_LV() { //초기화함수였으나 아래 memset으로 초기화 대신함 2.멤셋안되서 다시 씀
		q_size = 0;
		count = 0;
		time_q = 0;
	}*/
```
그리고 Queue Level에 대한 구조체를 구현하였다. 여기서 중첩구조체를 이용하여 선언하였다. 후에 memset을 이용하여 프로그램을 구현하려고 했지만 오류가 발생하고, 찾지 못해서 인자들을 만들어 사용하였다.

```
void Q_in(struct process_info *p_info, int num) {/*큐에 들어올 때 실행되는 함수*/
		Q[q_size].index = p_info[num].index;/*프로세스의 인덱스값을 큐에 입력*/
		Q[q_size].end = p_info[num].service_T;/*프로세스의 서비스타임을 큐에 입력*/
		q_size++;/*큐에 하나가 들어옴에 따라 프로세스의 갯수가 하나 증가함*/

		for (int i = 0; i < q_size; i++) {/*큐가 하나 들어옴에 따라 프로세스개수에 맞춰진 첫번째 실행라인에 따라 프로세스들의 실행 순서를 밀어줌,*/
			Q[i].front++;
		}
	}/*즉 이 큐에선 q_size로 프로세스의 개수를 받고 그 개수에 따라 큐의 크기를 지정하여 또한 그 변수를 시작점으로 두어 front값이 q_size값과 같거나 맞닿아 있다면 최우선 실행하겠다는 말*/

	int Q_out(int time_q) {/*큐가 실행되어 밖으로 출력될 때 실행되는 함수*/
		//for (int i = 0; i < q_size; i++) {/*전체 큐를 둘러보고 실행을 하나씩 시켜줌 실행순서를 정하는 반복문*/
			for (int j = 0; j <= q_size; j++) {/*어떤 큐가 제일 앞에 나와있는지 검색하는 반복문*/
				if (Q[j].front == q_size) {/*제일 앞에 나온 큐를 끄집어 내줌*/
					for (int k = 0; k < time_q; k++) {/*그 큐를 타임퀀텀만큼 실행해줌*/
						printf("%c", (char)(65 + Q[j].index));
						count++;/*실행된 만큼 카운트*/
						Q[j].end--;/*실행된 만큼 해당 큐의 라이프 감소*/
						if (Q[j].end == 0) {
							Q[j].front = 100;
							q_size--;
							
							return count;
						}
					}
					for (int y = 0; y < q_size; y++) {/*해당 프로세스가 타임퀀텀만큼 실행되면 모든 큐의 front를 앞으로 당겨줌*/
						Q[y].front++;
					}
					Q[j].front = 1;/*그 후에 실행되었던 큐의 front를 1의 값을 넣어 제일 뒤로 배열해줌*/
					break;/*두번째 반복문, 즉 실행되어야 할 큐를 검색하는 반복문은 해당큐가 이미 검색되어 출력되면 탈출하여 다음 순서의 큐를 검색함*/
				}
			}
		//}
		return count;/*큐가 한번 실행되면서 얼만큼의 프로세스가 수행되었는지를 1의 단위로 카운트해서 반환*/
	}
};
```
마지막으로 Queue를 사용할 때 필요한 push와 pop에 대한 함수를 정의하였다. 소스코드를 구현하면서 pop은 Q_out으로 push는 Q_in으로 함수이름을 설정하였다.

 Q_in은 프로세스의 index값을 큐에 입력하는 것과 프로세스의 서비스타임을 큐에 입력하는 과정과 큐에 하나씩 들어옴에 따라 프로세스의 개수가 증가하는 과정을 나타내었다. 

Q_out은 다중 반복문과 조건문을 사용하였다. 먼저 Queue에서 하나씩 뽑아내는 것이라 생각하여 결과에 대한 값을 return받는다고 생각했다. 전체 Queue를 돌면서 실행을 각각 시켜줌에 따라 실행순서를 정하는 반복문을 만드는 것을 잡고 시작하였다. 그 다음 어떤 큐가 제일 앞에 나와있는 지를 확인해내는 과정을 작성하고, 제일 앞에 있는 Queue를 꺼내주었다. 그리고 그 꺼낸 프로세스(Queue)를 타임퀀텀만큼 실행을 해주고, 그만큼을 count해준 후 end값을 감소시켰다. 그리고 감소하고 난 후, Service_time이 끝난 프로세스에 대해서는 탈락되는 조건문을 작성하였다. 이 과정에서 오류가 발생하였고, 마지막엔 찾아내지 못하였다.

### FIFO(FCFS)

```
void pipo(struct process_info *process, int all_size, int process_num) {/*142행의 사이즈 구하는 수식때문에 총 서비스타임을 넘어가는 도착시간을 가지면 출력못해줌*/

	printf("pipo함수\n");

	for (int i = 0; i < all_size; i++) {/*전체크기만큼 반복문*/
		for (int k = 0; k < process_num; k++) {
			if (process[k].arrival_T == i) {/*프로세스의 도착시간과 전체크기의 시간이 일치하는지*/
				for (int j = 0; j < process[k].service_T; j++) {/*도착시간이 일치하는 프로세스의 서비스시간만큼 출력*/
					printf("%c", (char)(65 + process[k].index));
				}
			}
		}
		/*else if (process[arrival_count].index == NULL) {
		break; 이거 쓸모없는듯
		}*/
	}
}
```
FIFO(FCFS)는 먼저 들어온 프로세스의 순서대로 실행시켜 처리하는 단순한 구조이다. 먼저 전체의 프로세스를 구동해주기 위해서 반복문인 for()문을 사용하여 전체 크기만큼 반복하는 틀을 잡았다. 이 전체반복문 안에서 다시 반복문을 작성하였고, if()문을 통해서 프로세스의 도착시간과 전체크기의 시간이 일치하는지에 대한 여부를 확인한 후 일치할 경우 그 프로세스를 Service_time만큼 출력하고, 다음 프로세스를 Service_time만큼 또 출력하는 방식으로 마지막 프로세스까지 출력을 한다. 소스코드를 작성할 때, 중간에 출력할 프로세스가 없는 경우는 배제하였다. 만약 중간에 비는 경우를 생각한다면 2가지로 나눌 수 있다. 첫 번째 경우는 중간에 공백으로 시간을 대체하는 경우이다. 이 경우를 따져준다면, 중간에 if문을 작성하여 실행할 프로세스가 있는지를 따져주고 없다면 그 없음에 대한 값을 출력함으로 대체할 수 있다. 두 번째 경우는 에러 출력이다. 마찬가지로 2번째 for문 속 if문의 else경우로 에러를 출력하고 프로그램을 종료시키면서 완성할 수 있다.

### RR(Round Robin)

RR(Round Robin)은 들어온 프로세스가 타임퀀텀에 따라 들어온 순서에 영향을 받아  time slice하여 실행하는 구조이다. 이를 구현하기 위해 Queue 하나를 미리 구현해둔 구조체에서 가져오고, 타임퀀텀과 count를 선언하였다. 먼저 Queue를 동적할당 하였고, 중첩구조체를 이용하여 같이 동적할당을 해주었다. 그리고 타임퀀텀을 입력받는다. 구현에 앞서 MAX_SIZE를 정의하지 않고 입력에 따라서 변할 수 있게 구현하는 목표를 잡았다. 

```
void rr(struct process_info *process, int all_size,int process_num) {

	printf("라운드로빈함수\n");

	int time_q = 0;
	int count = 0;
	struct Q_LV *QLV;

	//memset(&QLV, 0, sizeof(Q_LV));멤셋을 ㎱ 때 출력이 멈추는 현상 일어남
	QLV = (Q_LV *)malloc(sizeof(Q_LV));/*아래 확인하면서 멤셋에서 동적할당으로 바꿈 최선책인지는 모름 변경가능*/
	QLV[0].Q = (Queue *)malloc(sizeof(Queue));
	//memset(&QLV[0].Q, 0, sizeof(QLV[0].Q));

	QLV[0].q_size = 0;
	QLV[0].count = 0;
	QLV[0].time_q = 0;

	for (int f = 0; f < process_num; f++) {
		QLV[0].Q[f].end = 0;
		QLV[0].Q[f].front = 0;
		QLV[0].Q[f].index = 0;
	}

	/*QLV[0].count = 1;
	printf("%d", QLV[0].count);
	QLV[0].Q[0].index = 1;
	printf("%d", QLV[0].Q[0].index);메모리에 접근하는지 확인용도 지워도됨*/

	printf("\n타임퀀텀:");
	scanf_s("%d", &time_q);


	for (int i = 0; i < all_size; i++) {/*전체크기만큼 반복문*/
		for (int k = 0; k < process_num; k++) {
			if (process[k].arrival_T == i) {/*프로세스의 도착시간과 전체크기의 시간이 일치하는지*/
				QLV[0].Q_in(process, k);/*큐에 프로세스가 들어가면*/
			}
		}
		if (count == i) {/*카운트는 전체 실행칸에서 1앞에서 출발함*/
			QLV[0].Q_out(time_q);/*큐에 들어있는 인자들을 한번에 출력해줌*/
			count += QLV[0].Q_out(time_q);/*큐에 들어있었던 즉, 출력된 수만큼 더해줌*/
		}
	}
}
```
전체크기만큼 반복문을 돌리면서 프로세스의 도착시간과 전체크기의시간이 일치하는지를 따져주면서, 일치하는 경우 Queue에 프로세스가 들어가도록 구현하고, count가 시작을 1로 정의하여 Queue에 들어있는 인자들을 한번에 출력해주고, 출력된 수만큼 더해주는 방식을 구현하였다.

### MLFQ(Multi-Level Feedback Queue)

MLFQ는 여러 개의 Ready Queue를 이용하여 여러 조건을 부여하여 프로세스를 작동시키는 원리를 가진 Scheduling이다. 이는 RR을 구현하고 그를 이용하여 추가적인 조건과 여러개의 Ready Queue를 추가하여 구현하려 했지만, RR을 완벽히 구현하지 못하여 기본적인 틀밖에 잡지 못하였다.

```
void mlfq(struct process_info *process, int all_size, int process_num) {

	printf("mlfq함수\n");

	struct Q_LV *QLV;
	int q_num = 0;
	int arrival_count = 0;
	int count = 0;
	int QLV_count = 0;

	printf("\n큐의 개수는:");
	scanf_s("%d", &q_num);

	QLV = (Q_LV *)malloc(sizeof(Q_LV)*q_num);

	for (int i = 0; i < q_num; i++) {
		QLV[i].count = 0;
		QLV[i].q_size = 0;
		QLV[i].time_q = 0;
		QLV[i].Q = (Queue *)malloc(sizeof(Queue));
		for (int f = 0; f < process_num; f++) {
			QLV[i].Q[f].end = 0;
			QLV[i].Q[f].front = 0;
			QLV[i].Q[f].index = 0;
		}
		printf("\n%d번째 큐의 타임퀀텀:", i+1);
		scanf_s("%d", &QLV[i].time_q);
	}

	for (int j = 0; j < all_size; j++) {/*전체크기만큼 반복문*/

		if (process[arrival_count].arrival_T == j) {
			QLV[QLV_count].Q_in(process, arrival_count);
			arrival_count++;
		}
		if (count == j) {
			QLV[QLV_count].Q_out(QLV[QLV_count].time_q);
			count += QLV[QLV_count].Q_out(QLV[QLV_count].time_q);
			QLV_count++;
			//서비스타임만 감소시켜주면 됨??

		}
		//printf("%d", QLV[0].Q[arrival_count].front);
	}
}
```
전체적인 틀은 RR의 기본구조와 같고, Queue Level에 따라 유동적으로 사용할 수 있도록 구현한 Q_LV 구조체를 가져와서 정의하였다.

### Lottery scheduler

```
void lottery(struct process_info *process, int all_size, int process_num) {
	printf("lottery함수\n");

	int data[MAX_COUNT];
	int i = 0;
	int k = 0;
		
	srand((unsigned int)time(NULL));

	//각프로세스의 서비스타임갯수만큼 숫자 할당(이거 for문으로 하면 됨)
		
	for (int k = 0; k < process_num; k++) {
		for (int j = 0; j < process[k].service_T; j++) {
			data[i] = process[k].index;
			i++;
		}
	}

	for (i = 0; i < MAX_COUNT; i++){
		k = rand() % MAX_COUNT + 1;
		printf("%c ", (char)(65+ data[k]));
	}
}
```
Lottery scheduler는 프로세스들에게 각각에게 티켓을 주어 랜덤하게 뽑아 많이 실행할수록 확률에 가까운 결과를 나타내는 scheduling이다. 이는 구현하면서 많은 경우의 수보다는 랜덤하게 출력되는 것에 초점을 두었다. 사이즈만큼의 횟수만을 확인하였고, 확률과 많이 다른 결과가 출력되었고 이는 non-deterministic함을 보여주었다.

### Result

![image](https://user-images.githubusercontent.com/26988563/161191243-d30a0b21-1b0e-4901-8a34-7213f3b6f1a9.png)

### end,,

* Queue에서의 time_quantum마다 각 프로세스의 front와 end의 상태에 대해 명확히 알게끔 코드를 짜야할 필요성을 느낌
* Queue의 데이터에 대한 push와 pop합수의 위치를 중첩 구조체를 구현하는 동안 혼동이 옴 중첨 구조체의 특성과 사용법에 대해 더 공부해야할 필요성을 느낌
* Queue에 들어간 프로세스 중 service_time을 전부 소모한 프로세스를 삭제하는 함수가 동작하지 않음 결과적으로 죽어야 할 프로세스가 계속 출력되는 현상을 고쳐야 함





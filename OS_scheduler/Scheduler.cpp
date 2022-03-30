#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include <time.h>
#define MAX_COUNT 21

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

struct Queue {/*각 큐에 담길 정보*/
	int front;
	int end;
	int index;

	Queue() {
		front = 0;
		end = 0;
		index = 0;
	}
};

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


void rr(struct process_info *process, int all_size,int process_num) {

	printf("라운드로빈함수\n");

	int time_q = 0;
	int count = 0;
	struct Q_LV *QLV;

	//memset(&QLV, 0, sizeof(Q_LV));멤셋을 썻을 때 출력이 멈추는 현상 일어남 왠지는 모르겠음 이걸로 3시간잡아먹음 수민쨩
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

int main() {
	struct process_info *process;/*프로세스 구조체 정의*/
	int process_num = 0;/*프로세스 개수 변수*/
	int all_size = 0;

	printf("프로세스의 개수:%d", process_num);
	scanf_s("%d", &process_num);
	process = (process_info *)malloc(sizeof(process_info)* process_num);/*프로세스 개수만큼 동적할당*/

	for (int i = 0; i < process_num; i++) {/*프로세스개수만큼의 반복문실행으로 프로세스 정보 입력*/
		printf("\n %d번째 프로세스의 도착시간:", i + 1);
		scanf_s("%d", &process[i].arrival_T);
		printf("\n %d번째 프로세스의 서비스타임:", i + 1);
		scanf_s("%d", &process[i].service_T);
		process[i].index = i;
		all_size += process[i].service_T;
		all_size += process[i].arrival_T;
	}

	lottery(process, all_size, process_num);
	pipo(process, all_size, process_num);
	rr(process, all_size, process_num);
	mlfq(process, all_size, process_num);

	return 0;
}

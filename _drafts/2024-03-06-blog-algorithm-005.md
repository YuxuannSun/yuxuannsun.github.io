---
title: 'Algorithm: Dijkstra'
date: 2024-03-06
permalink: /posts/2024/03/blog-algorithm-005/
author_profile: true
tags:
  - Point Cloud
  - Algorithm
---

Algorithm: Dijkstra

* [DIJKSTRA, EW. "A Note on Two Problems in Connexion with Graphs." Numerische Mathematik 1 (1959): 269-271.](https://doi.org/10.1007/BF01386390)

* Dijkstra算法是一种用于解决图中单源最短路径问题的经典算法，由荷兰计算机科学家Edsger W. Dijkstra在1956年提出。该算法可以应用于有向图或无向图，但边的权重必须为非负值。
* Dijkstra算法的目标是找到从一个起始顶点到图中所有其他顶点的最短路径。算法基于贪心策略，逐步扩展到其他顶点，并在这个过程中保证每次扩展都是当前已知最短路径的顶点。算法通过维护一个距离数组（或称为距离表），记录从起始顶点到每个顶点的当前已知最短路径长度。同时，使用一个优先级队列（通常使用最小堆）来选择下一个扩展的顶点，以保证每次选择的都是距离起始顶点最近的顶点。

* Dijkstra算法的基本步骤如下：

  * 初始化：
    * 将起始顶点的距离设为0，表示起始顶点到自身的距离为0。
    * 将其他顶点的距离设为无穷大，表示从起始顶点到这些顶点的距离尚未确定。
    * 将起始顶点加入一个优先级队列（或最小堆）中，按照起始顶点到各个顶点的距离进行排序。
  * 迭代：
    * 重复以下步骤直到优先级队列为空：
      * 从优先级队列中选取当前距离起始顶点最近的顶点。
      * 对于选取的顶点，遍历其相邻的顶点：
        * 计算从起始顶点经过选取的顶点到相邻顶点的距离。这个距离等于选取的顶点到起始顶点的距离加上选取的顶点到相邻顶点的边的权重。
        * 如果新计算的距离小于相邻顶点当前已知的最短距离，则更新相邻顶点的距离为新计算的距离。
        * 将已更新的相邻顶点加入优先级队列中。
  * 终止：
    * 当优先级队列为空时，算法结束。此时，距离数组中记录的即为从起始顶点到每个顶点的最短路径长度。

* 在算法的每一步中，通过优先级队列的帮助，保证了每次选取的顶点都是当前已知最短路径的顶点，这样可以确保算法找到的路径是最短的。算法的时间复杂度主要取决于优先级队列的实现方式，通常为O((V + E) log V)，其中V是顶点数，E是边数。
* 需要注意的是，Dijkstra算法只适用于没有负权边的图，因为负权边可能导致算法失效。如果图中存在负权边，可以考虑使用其他算法，如Bellman-Ford算法。

* python实现



```python
def dijkstra(graph, start):
    # 初始化距离字典，用于存储起始顶点到其他顶点的最短距离
    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0  # 起始顶点到自身的距离为0
    
    # 使用字典模拟优先级队列
    priority_queue = {start: 0}
    
    # 迭代：直到优先级队列为空
    while priority_queue:
        # 选取距离起始顶点最近的顶点
        current_vertex = min(priority_queue, key=priority_queue.get)
        current_distance = priority_queue[current_vertex]
        del priority_queue[current_vertex]
        
        # 遍历当前顶点的邻居
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight  # 计算经过当前顶点到达邻居的距离
            # 如果经过当前顶点到达邻居的距离比已知的最短路径距离要小，则更新距离字典和优先级队列
            if distance < distances[neighbor]:
                distances[neighbor] = distance  # 更新最短距离
                priority_queue[neighbor] = distance  # 更新优先级队列
    
    return distances

# 测试示例
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 2, 'D': 1},
    'C': {'A': 3, 'B': 2, 'D': 4, 'E': 6},
    'D': {'B': 1, 'C': 4, 'E': 8, 'F': 5},
    'E': {'C': 6, 'D': 8, 'F': 2},
    'F': {'D': 5, 'E': 2}
}

start_vertex = 'A'
shortest_distances = dijkstra(graph, start_vertex)
print("Shortest distances from vertex", start_vertex, ": ", shortest_distances)
```
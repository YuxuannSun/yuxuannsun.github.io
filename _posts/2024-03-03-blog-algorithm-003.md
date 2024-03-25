---
title: 'Algorithm: Density-based spatial clustering of applications with noise (DBSCAN) '
date: 2024-03-03
permalink: /posts/2024/03/blog-algorithm-003/
author_profile: true
tags:
  - Point Cloud
  - Algorithm
---

Algorithm: Density-based spatial clustering of applications with noise (DBSCAN) 

* Algorithm: Density-based spatial clustering of applications with noise (DBSCAN) 是一种常用于空间数据聚类的算法。它的主要思想是通过确定数据点的密度来识别聚类，而不是依赖于事先指定的聚类数量。DBSCAN 算法对于具有不同形状和大小的聚类簇的数据集都能够有效地进行聚类。

* DBSCAN 算法是由 Martin Ester、Hans-Peter Kriegel、Jörg Sander 和 Xiaowei Xu 于 1996 年提出的。他们在论文 "A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise" 中首次描述了这一算法。这篇论文发表在《Proceedings of the 2nd International Conference on Knowledge Discovery and Data Mining (KDD-96)》上。DBSCAN 算法因其能够有效地处理噪声和发现不规则形状的聚类而受到广泛关注，并成为空间数据挖掘领域中的重要算法之一。
  * [57] Ester, Martin, et al. "A density-based algorithm for discovering clusters in large spatial databases with noise." kdd. Vol. 96. No. 34. 1996. [PDF](https://cdn.aaai.org/KDD/1996/KDD96-037.pdf?source=post_page---------------------------)

* DBSCAN 算法的主要步骤：

  * 核心点识别：算法首先选择一个未被访问的数据点，并计算以该点为中心的半径范围内的数据点数量。如果这个数量大于或等于预先指定的阈值（通常是一个称为 MinPts 的参数），那么该点被认为是一个核心点。这个阈值 MinPts 控制着密度的定义，通常选择 MinPts 大于等于数据点的维度加一。

  * 密度可达点扩展：从核心点开始，算法通过密度可达性（density-reachability）来递归地扩展聚类。如果一个点在另一个点的半径范围内，并且这个点也是核心点，则将其归类为同一个聚类。这个过程会继续进行，直到无法再找到新的密度可达点。

  * 边界点识别：如果一个点不是核心点但位于核心点的半径范围内，则被标记为边界点。边界点属于同一个聚类，但不具有足够的邻居来被认为是核心点。

  * 噪声点标记：任何未被分类的数据点都被标记为噪声点，因为它们不属于任何聚类。

* DBSCAN 算法通常需要遍历数据集中的每一个点来找到核心点。这是因为核心点的判断需要考虑到每个点周围的邻居数量。因此，在算法的实现中，通常需要对数据集中的每一个点进行遍历，计算其周围邻居的数量，以确定是否符合核心点的条件。虽然这样的遍历可能在大型数据集上会带来一定的计算开销，但是这是 DBSCAN 算法的基本操作之一。对于较大的数据集，可以通过一些优化措施来提高算法的效率，例如使用数据结构（如 kd 树、R 树等）来加速邻居搜索，以减少计算的复杂度。

* 总的来说，DBSCAN 算法将数据点分为三类：核心点、边界点和噪声点。核心点组成聚类的核心，而边界点连接核心点形成更大的聚类。噪声点是不适合聚类的孤立点。DBSCAN 算法的优点包括不需要预先指定聚类数量、能够处理不同形状和大小的聚类簇、对参数不敏感等。然而，它的性能可能受到密度不均匀或者具有明显密度梯度的数据集的影响，对于这些情况可能需要进行参数调整或者采用其他方法。

* python实现

```
from sklearn.neighbors import NearestNeighbors  # 导入用于计算最近邻的模块
import numpy as np  # 导入用于处理数组的模块

class DBSCAN:
    def __init__(self, eps, min_samples):
        self.eps = eps  # 定义 DBSCAN 算法中的邻域半径
        self.min_samples = min_samples  # 定义 DBSCAN 算法中的最小样本数

    def fit(self, X):
        self.X = X  # 存储数据集
        self.labels = np.zeros(len(X))  # 初始化标签数组，0 表示未分类
        self.cluster_label = 0  # 初始化聚类标签

        for i in range(len(X)):  # 遍历数据集中的每个点
            if self.labels[i] != 0:  # 如果点已被分类，则跳过
                continue
            neighbors = self.range_query(X[i])  # 查找以当前点为中心，半径为 eps 的邻居
            if len(neighbors) < self.min_samples:  # 如果邻居数量小于最小样本数
                self.labels[i] = -1  # 将该点标记为噪声点（-1 表示噪声）
            else:  # 否则
                self.expand_cluster(i, neighbors)  # 扩展聚类
                self.cluster_label += 1  # 聚类标签加1

    def expand_cluster(self, core_point_idx, neighbors):
        self.cluster_label += 1  # 聚类标签加1
        self.labels[core_point_idx] = self.cluster_label  # 将核心点标记为当前聚类标签

        i = 0
        while i < len(neighbors):
            neighbor_idx = neighbors[i]  # 获取当前邻居的索引
            if self.labels[neighbor_idx] == -1:  # 如果邻居是噪声点
                self.labels[neighbor_idx] = self.cluster_label  # 将其标记为当前聚类标签
            elif self.labels[neighbor_idx] == 0:  # 如果邻居尚未分类
                self.labels[neighbor_idx] = self.cluster_label  # 将其标记为当前聚类标签
                new_neighbors = self.range_query(self.X[neighbor_idx])  # 找到新邻居
                if len(new_neighbors) >= self.min_samples:  # 如果新邻居数满足最小样本数
                    neighbors += new_neighbors  # 将新邻居添加到当前邻居列表中
            i += 1  # 更新索引以处理下一个邻居

    def range_query(self, point):
        nbrs = NearestNeighbors(radius=self.eps).fit(self.X)  # 使用半径 eps 创建最近邻对象
        return nbrs.radius_neighbors([point], return_distance=False)[0]  # 返回在给定半径范围内的邻居列表

# 示例用法:
if __name__ == "__main__":
    # 生成示例数据
    from sklearn.datasets import make_blobs
    X, _ = make_blobs(n_samples=100, centers=3, random_state=42)

    # 应用 DBSCAN
    dbscan = DBSCAN(eps=0.5, min_samples=5)
    dbscan.fit(X)

    print("Labels:", dbscan.labels)
```
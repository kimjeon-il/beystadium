import { appState } from "#app/state";
import {
  animeEpisodeTitle,
  episodeHashId,
  episodeIndexFromHash,
  normalizeAnimeSeason
} from "#app/anime-core";
import { animeInfo } from "#app/data-store";
import { rememberModalContext } from "#app/modal-context";
import { escapeHtml } from "#app/release-core";
import { appServices } from "#app/services";

const rememberAnimeModalContext = () => rememberModalContext("category-anime-episodes", "anime-episode", {
  animeSeason: appState.activeAnimeSeason,
  animeQuery: appState.activeAnimeEpisodeQuery
});

function openAnimeEpisodeDetail(indexOrId, options = {}) {
  const index = typeof indexOrId === "number" ? indexOrId : episodeIndexFromHash(indexOrId);
  const episode = animeInfo.episodes[index];
  if (!episode) return;
  const id = episodeHashId(index);
  if (!id) return;
  if (appServices.routeIfNeeded({ type: "detail", id, options }, options)) {
    if (options.fromAnimeList) rememberAnimeModalContext();
    return;
  }
  appServices.cleanupModelViewer();
  const backAnimeSeason = normalizeAnimeSeason(options.animeSeason || episode.season || appState.activeAnimeSeason);
  const backAnimeQuery = typeof options.animeQuery === "string" ? options.animeQuery : appState.activeAnimeEpisodeQuery;
  const backButton = options.fromAnimeList
    ? appServices.modalBackButtonMarkup({ label: "방영목록으로 돌아가기", animeEpisodes: true })
    : "";
  const content = appServices.setModalContent(`<div class="modal-inner modal-inner--rare-bey-get-list">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
      <div class="modal-scroll-area">
        <h3 class="modal-name product-modal-name">${escapeHtml(animeEpisodeTitle(episode))}</h3>
        <div class="product-empty-info-slot" aria-hidden="true"></div>
      </div>
      ${backButton}
    </div>
  </div>`);
  if (!content || !appServices.modal) return;
  content.querySelector("[data-back-anime-episodes]")?.addEventListener("click", () => {
    appServices.openCategoryAnimeEpisodesDetail({
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    });
  });
  appServices.finishModalOpen({
    contextKind: "metal-fight-episode",
    contextId: id,
    contextOptions: {
      fromAnimeList: options.fromAnimeList,
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    }
  });
}

export { openAnimeEpisodeDetail };
